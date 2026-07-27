import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-brazil-servers');
}

export default function AlasteraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-brazil-servers" />;
}
