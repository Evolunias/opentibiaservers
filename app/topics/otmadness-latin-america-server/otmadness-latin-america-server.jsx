import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-latin-america-server');
}

export default function OtmadnessLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-latin-america-server" />;
}
