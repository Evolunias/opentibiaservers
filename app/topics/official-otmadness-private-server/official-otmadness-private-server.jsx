import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-private-server');
}

export default function OfficialOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-private-server" />;
}
