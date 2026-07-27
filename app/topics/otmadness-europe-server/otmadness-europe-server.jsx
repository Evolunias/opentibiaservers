import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-europe-server');
}

export default function OtmadnessEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-europe-server" />;
}
