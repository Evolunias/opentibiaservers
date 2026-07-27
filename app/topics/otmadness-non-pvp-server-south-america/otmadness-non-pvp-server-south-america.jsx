import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-south-america');
}

export default function OtmadnessNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-south-america" />;
}
