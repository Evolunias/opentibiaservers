import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-no-reset-server-sweden');
}

export default function OxygenotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-no-reset-server-sweden" />;
}
