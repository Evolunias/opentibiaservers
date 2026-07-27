import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-europe-servers');
}

export default function OtmadnessEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-europe-servers" />;
}
