import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-rare-items');
}

export default function AldoraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="aldora-rare-items" />;
}
