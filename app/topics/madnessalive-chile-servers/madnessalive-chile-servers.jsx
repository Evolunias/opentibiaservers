import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-chile-servers');
}

export default function MadnessaliveChileServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-chile-servers" />;
}
