import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-online');
}

export default function TopRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-online" />;
}
