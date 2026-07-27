import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-client');
}

export default function MadnessaliveClientKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-client" />;
}
