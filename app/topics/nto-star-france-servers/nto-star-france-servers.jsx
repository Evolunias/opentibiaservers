import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-france-servers');
}

export default function NtoStarFranceServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-france-servers" />;
}
