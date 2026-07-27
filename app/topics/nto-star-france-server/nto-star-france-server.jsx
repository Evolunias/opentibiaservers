import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-france-server');
}

export default function NtoStarFranceServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-france-server" />;
}
