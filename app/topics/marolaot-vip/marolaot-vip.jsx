import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-vip');
}

export default function MarolaotVipKeywordPage() {
  return <StaticKeywordPage slug="marolaot-vip" />;
}
