import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-sweden');
}

export default function OxygenotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-sweden" />;
}
