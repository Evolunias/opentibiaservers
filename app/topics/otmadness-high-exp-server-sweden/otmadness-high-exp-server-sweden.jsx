import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-sweden');
}

export default function OtmadnessHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-sweden" />;
}
