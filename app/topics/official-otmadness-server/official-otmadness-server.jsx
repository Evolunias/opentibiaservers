import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-server');
}

export default function OfficialOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-server" />;
}
