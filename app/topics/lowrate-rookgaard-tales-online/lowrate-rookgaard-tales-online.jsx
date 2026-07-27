import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-online');
}

export default function LowrateRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-online" />;
}
