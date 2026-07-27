import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-poland-server');
}

export default function MadnessalivePolandServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-poland-server" />;
}
