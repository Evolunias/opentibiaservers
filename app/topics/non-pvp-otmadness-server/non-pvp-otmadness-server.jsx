import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-otmadness-server');
}

export default function NonPvpOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-otmadness-server" />;
}
