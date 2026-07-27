import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-private-server');
}

export default function TopOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-private-server" />;
}
