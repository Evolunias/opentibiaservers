import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-brazil-server');
}

export default function NtoStarBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-brazil-server" />;
}
