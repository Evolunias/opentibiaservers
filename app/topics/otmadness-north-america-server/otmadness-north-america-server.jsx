import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-north-america-server');
}

export default function OtmadnessNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-north-america-server" />;
}
