import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-tibia');
}

export default function LowrateYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-tibia" />;
}
