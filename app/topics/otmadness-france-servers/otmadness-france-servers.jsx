import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-france-servers');
}

export default function OtmadnessFranceServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-france-servers" />;
}
