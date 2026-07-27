import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-fresh-start-server-sweden');
}

export default function ImperianicFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-fresh-start-server-sweden" />;
}
