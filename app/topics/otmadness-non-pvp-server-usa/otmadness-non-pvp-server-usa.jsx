import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-usa');
}

export default function OtmadnessNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-usa" />;
}
