import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-north-america-server');
}

export default function MadnessaliveNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-north-america-server" />;
}
