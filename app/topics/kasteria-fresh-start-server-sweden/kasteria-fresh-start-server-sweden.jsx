import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-sweden');
}

export default function KasteriaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-sweden" />;
}
