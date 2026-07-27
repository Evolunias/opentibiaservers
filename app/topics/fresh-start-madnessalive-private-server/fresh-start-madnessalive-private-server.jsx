import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-private-server');
}

export default function FreshStartMadnessalivePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-private-server" />;
}
