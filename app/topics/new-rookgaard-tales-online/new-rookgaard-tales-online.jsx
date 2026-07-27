import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-online');
}

export default function NewRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-online" />;
}
