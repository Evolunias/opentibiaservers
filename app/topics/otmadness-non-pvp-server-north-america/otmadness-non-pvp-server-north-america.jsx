import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-north-america');
}

export default function OtmadnessNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-north-america" />;
}
