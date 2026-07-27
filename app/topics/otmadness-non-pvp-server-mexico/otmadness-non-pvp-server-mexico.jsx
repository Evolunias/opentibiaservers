import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-mexico');
}

export default function OtmadnessNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-mexico" />;
}
