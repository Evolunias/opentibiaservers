import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-online');
}

export default function TopXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-online" />;
}
