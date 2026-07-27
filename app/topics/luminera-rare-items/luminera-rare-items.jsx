import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-rare-items');
}

export default function LumineraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="luminera-rare-items" />;
}
