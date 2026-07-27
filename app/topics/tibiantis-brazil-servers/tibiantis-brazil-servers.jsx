import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-brazil-servers');
}

export default function TibiantisBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-brazil-servers" />;
}
