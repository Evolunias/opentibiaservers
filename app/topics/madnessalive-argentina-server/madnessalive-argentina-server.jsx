import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-argentina-server');
}

export default function MadnessaliveArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-argentina-server" />;
}
