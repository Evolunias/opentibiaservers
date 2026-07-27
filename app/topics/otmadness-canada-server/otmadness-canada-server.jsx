import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-canada-server');
}

export default function OtmadnessCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-canada-server" />;
}
