import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-canada-servers');
}

export default function OtmadnessCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-canada-servers" />;
}
