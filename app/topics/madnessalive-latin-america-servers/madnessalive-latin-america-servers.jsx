import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-latin-america-servers');
}

export default function MadnessaliveLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-latin-america-servers" />;
}
