import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-open-tibia');
}

export default function HighrateSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-open-tibia" />;
}
