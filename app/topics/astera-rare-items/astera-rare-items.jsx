import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-rare-items');
}

export default function AsteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="astera-rare-items" />;
}
