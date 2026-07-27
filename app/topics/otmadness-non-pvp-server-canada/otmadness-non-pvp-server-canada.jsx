import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-canada');
}

export default function OtmadnessNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-canada" />;
}
