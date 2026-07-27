import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-europe');
}

export default function OtmadnessNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-europe" />;
}
