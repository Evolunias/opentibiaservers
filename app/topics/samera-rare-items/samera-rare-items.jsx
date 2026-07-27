import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-rare-items');
}

export default function SameraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="samera-rare-items" />;
}
