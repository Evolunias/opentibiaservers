import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-tibia');
}

export default function LowrateSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-tibia" />;
}
