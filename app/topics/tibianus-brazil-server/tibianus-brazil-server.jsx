import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-brazil-server');
}

export default function TibianusBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-brazil-server" />;
}
