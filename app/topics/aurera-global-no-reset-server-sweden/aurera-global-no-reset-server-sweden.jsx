import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-no-reset-server-sweden');
}

export default function AureraGlobalNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-no-reset-server-sweden" />;
}
