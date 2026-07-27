import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-server');
}

export default function FreshStartMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-server" />;
}
