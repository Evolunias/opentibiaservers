import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-latin-america-servers');
}

export default function OtmadnessLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-latin-america-servers" />;
}
