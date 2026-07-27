import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-brazil-servers');
}

export default function TibianusBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-brazil-servers" />;
}
