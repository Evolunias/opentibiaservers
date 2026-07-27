import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-latin-america-server');
}

export default function MadnessaliveLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-latin-america-server" />;
}
