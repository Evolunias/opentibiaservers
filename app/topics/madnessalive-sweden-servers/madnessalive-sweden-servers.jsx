import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-sweden-servers');
}

export default function MadnessaliveSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-sweden-servers" />;
}
