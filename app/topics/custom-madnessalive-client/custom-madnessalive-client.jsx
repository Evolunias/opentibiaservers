import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-client');
}

export default function CustomMadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-client" />;
}
