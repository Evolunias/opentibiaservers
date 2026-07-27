import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-bosses');
}

export default function AmeriaBossesKeywordPage() {
  return <StaticKeywordPage slug="ameria-bosses" />;
}
