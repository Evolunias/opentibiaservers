import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-client');
}

export default function TopMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-client" />;
}
