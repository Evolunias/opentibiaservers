import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-open-tibia');
}

export default function LowrateSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-open-tibia" />;
}
