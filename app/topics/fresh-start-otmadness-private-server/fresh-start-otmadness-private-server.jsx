import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-private-server');
}

export default function FreshStartOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-private-server" />;
}
