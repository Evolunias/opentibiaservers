import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-high-exp-server-sweden');
}

export default function KasteriaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-high-exp-server-sweden" />;
}
