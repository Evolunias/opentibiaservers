import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-sweden');
}

export default function OtmadnessLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-sweden" />;
}
