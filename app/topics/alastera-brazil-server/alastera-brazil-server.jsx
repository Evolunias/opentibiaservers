import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-brazil-server');
}

export default function AlasteraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-brazil-server" />;
}
