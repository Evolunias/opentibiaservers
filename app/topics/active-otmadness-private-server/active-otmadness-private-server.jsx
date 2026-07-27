import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-private-server');
}

export default function ActiveOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-private-server" />;
}
