import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-latin-america-server');
}

export default function ClassicusLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-latin-america-server" />;
}
