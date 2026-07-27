import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-sweden');
}

export default function MidhemFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-sweden" />;
}
