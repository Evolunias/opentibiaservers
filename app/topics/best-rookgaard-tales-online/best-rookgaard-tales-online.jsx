import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-online');
}

export default function BestRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-online" />;
}
