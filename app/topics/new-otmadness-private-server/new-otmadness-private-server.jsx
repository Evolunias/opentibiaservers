import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-private-server');
}

export default function NewOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-private-server" />;
}
