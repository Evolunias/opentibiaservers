import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-europe-servers');
}

export default function NtoStarEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-europe-servers" />;
}
