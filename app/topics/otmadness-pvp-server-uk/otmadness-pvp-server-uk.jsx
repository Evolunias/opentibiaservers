import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-uk');
}

export default function OtmadnessPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-uk" />;
}
