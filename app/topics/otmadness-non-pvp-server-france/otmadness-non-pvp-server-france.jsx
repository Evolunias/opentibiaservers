import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-france');
}

export default function OtmadnessNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-france" />;
}
