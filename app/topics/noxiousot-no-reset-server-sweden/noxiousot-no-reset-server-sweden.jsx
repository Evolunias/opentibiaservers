import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-sweden');
}

export default function NoxiousotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-sweden" />;
}
