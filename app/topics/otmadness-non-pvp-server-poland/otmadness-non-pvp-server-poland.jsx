import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-poland');
}

export default function OtmadnessNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-poland" />;
}
