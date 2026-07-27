import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-no-reset-server-sweden');
}

export default function InfernalOtNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-no-reset-server-sweden" />;
}
