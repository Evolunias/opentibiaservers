import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-online');
}

export default function CurrentXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-online" />;
}
