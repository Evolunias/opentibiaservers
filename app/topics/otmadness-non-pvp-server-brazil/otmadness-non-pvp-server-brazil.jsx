import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-brazil');
}

export default function OtmadnessNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-brazil" />;
}
