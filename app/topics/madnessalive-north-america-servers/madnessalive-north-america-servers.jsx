import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-north-america-servers');
}

export default function MadnessaliveNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-north-america-servers" />;
}
