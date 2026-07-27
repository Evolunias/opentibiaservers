import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-online');
}

export default function OfficialRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-online" />;
}
