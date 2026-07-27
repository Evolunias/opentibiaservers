import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-tibia');
}

export default function HighrateSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-tibia" />;
}
