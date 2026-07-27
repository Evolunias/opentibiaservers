import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-open-tibia');
}

export default function LowrateThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-open-tibia" />;
}
