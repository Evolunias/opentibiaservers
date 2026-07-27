import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-sweden');
}

export default function RealestaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-sweden" />;
}
