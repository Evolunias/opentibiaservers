import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-canada-servers');
}

export default function MadnessaliveCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-canada-servers" />;
}
