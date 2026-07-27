import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-brazil-server');
}

export default function TibiantisBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-brazil-server" />;
}
