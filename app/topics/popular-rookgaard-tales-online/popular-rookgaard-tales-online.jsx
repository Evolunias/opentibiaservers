import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-online');
}

export default function PopularRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-online" />;
}
