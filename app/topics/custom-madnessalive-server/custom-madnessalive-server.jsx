import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-server');
}

export default function CustomMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-server" />;
}
