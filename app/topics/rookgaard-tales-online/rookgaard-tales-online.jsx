import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-online');
}

export default function RookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-online" />;
}
