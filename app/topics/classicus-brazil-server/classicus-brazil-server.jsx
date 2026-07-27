import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-brazil-server');
}

export default function ClassicusBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-brazil-server" />;
}
