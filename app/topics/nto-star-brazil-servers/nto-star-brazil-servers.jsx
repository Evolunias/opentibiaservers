import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-brazil-servers');
}

export default function NtoStarBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-brazil-servers" />;
}
