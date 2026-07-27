import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-germany');
}

export default function OtmadnessNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-germany" />;
}
