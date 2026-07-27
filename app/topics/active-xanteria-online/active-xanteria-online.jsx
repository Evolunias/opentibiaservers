import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-online');
}

export default function ActiveXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-online" />;
}
