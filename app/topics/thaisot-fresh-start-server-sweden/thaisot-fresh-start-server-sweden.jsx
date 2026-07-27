import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-sweden');
}

export default function ThaisotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-sweden" />;
}
