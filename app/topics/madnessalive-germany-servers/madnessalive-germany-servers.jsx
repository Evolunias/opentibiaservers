import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-germany-servers');
}

export default function MadnessaliveGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-germany-servers" />;
}
