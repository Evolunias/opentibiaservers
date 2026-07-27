import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-otmadness-server');
}

export default function PvpOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-otmadness-server" />;
}
