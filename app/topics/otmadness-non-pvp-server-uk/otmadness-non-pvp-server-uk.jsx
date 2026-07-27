import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-uk');
}

export default function OtmadnessNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-uk" />;
}
