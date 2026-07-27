import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-sweden');
}

export default function HarmoniaOtNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-sweden" />;
}
