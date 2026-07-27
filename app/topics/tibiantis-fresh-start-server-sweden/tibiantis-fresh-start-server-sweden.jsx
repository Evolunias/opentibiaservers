import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-sweden');
}

export default function TibiantisFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-sweden" />;
}
