import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-online');
}

export default function CustomRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-online" />;
}
