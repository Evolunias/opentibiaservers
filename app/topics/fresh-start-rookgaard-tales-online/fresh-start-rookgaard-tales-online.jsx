import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-online');
}

export default function FreshStartRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-online" />;
}
