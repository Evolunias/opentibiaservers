import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-online');
}

export default function AmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="ameria-online" />;
}
