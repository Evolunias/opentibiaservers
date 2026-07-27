import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-fresh-start-server-sweden');
}

export default function NilotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nilot-fresh-start-server-sweden" />;
}
