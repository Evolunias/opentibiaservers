import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-latin-america');
}

export default function OtmadnessNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-latin-america" />;
}
