import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-server');
}

export default function MadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-server" />;
}
