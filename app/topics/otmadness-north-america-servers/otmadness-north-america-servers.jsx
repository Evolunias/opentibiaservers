import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-north-america-servers');
}

export default function OtmadnessNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-north-america-servers" />;
}
