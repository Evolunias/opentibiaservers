import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-argentina-servers');
}

export default function MadnessaliveArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-argentina-servers" />;
}
