import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-sweden');
}

export default function MidhemNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-sweden" />;
}
