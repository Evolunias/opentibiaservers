import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-ot-server');
}

export default function OfficialOtmadnessOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-ot-server" />;
}
