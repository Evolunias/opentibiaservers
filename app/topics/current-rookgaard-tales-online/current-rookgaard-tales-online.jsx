import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-online');
}

export default function CurrentRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-online" />;
}
