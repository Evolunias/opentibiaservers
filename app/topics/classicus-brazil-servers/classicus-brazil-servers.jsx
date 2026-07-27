import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-brazil-servers');
}

export default function ClassicusBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-brazil-servers" />;
}
