import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fresh-start-server-sweden');
}

export default function AlasteraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-fresh-start-server-sweden" />;
}
