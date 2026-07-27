import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-server');
}

export default function TopMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-server" />;
}
