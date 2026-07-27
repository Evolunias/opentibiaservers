import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-tibia');
}

export default function CurrentYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-tibia" />;
}
