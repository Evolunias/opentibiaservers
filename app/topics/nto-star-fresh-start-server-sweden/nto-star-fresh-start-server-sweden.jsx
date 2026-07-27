import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-sweden');
}

export default function NtoStarFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-sweden" />;
}
