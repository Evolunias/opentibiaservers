import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-private-server');
}

export default function CustomOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-private-server" />;
}
