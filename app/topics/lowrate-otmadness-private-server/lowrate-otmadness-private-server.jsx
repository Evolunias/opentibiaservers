import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-private-server');
}

export default function LowrateOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-private-server" />;
}
