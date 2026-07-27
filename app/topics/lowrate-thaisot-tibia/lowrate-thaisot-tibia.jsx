import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-tibia');
}

export default function LowrateThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-tibia" />;
}
