import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-europe-server');
}

export default function NtoStarEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-europe-server" />;
}
