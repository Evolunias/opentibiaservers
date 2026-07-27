import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-latin-america-servers');
}

export default function ClassicusLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-latin-america-servers" />;
}
