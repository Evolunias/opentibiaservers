import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-canada-server');
}

export default function MadnessaliveCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-canada-server" />;
}
