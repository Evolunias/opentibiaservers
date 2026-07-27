import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-no-reset-server-sweden');
}

export default function OtmadnessNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-no-reset-server-sweden" />;
}
