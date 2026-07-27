import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-vip');
}

export default function AmeriaVipKeywordPage() {
  return <StaticKeywordPage slug="ameria-vip" />;
}
