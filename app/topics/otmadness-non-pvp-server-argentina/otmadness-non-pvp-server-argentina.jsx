import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-argentina');
}

export default function OtmadnessNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-argentina" />;
}
