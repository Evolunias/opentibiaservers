import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-rare-items');
}

export default function TenebraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="tenebra-rare-items" />;
}
