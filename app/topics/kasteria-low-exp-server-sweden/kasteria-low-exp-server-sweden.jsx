import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-low-exp-server-sweden');
}

export default function KasteriaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-low-exp-server-sweden" />;
}
