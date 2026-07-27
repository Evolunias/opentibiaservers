import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-france-server');
}

export default function OtmadnessFranceServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-france-server" />;
}
