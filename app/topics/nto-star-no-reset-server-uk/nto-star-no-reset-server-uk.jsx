import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-uk');
}

export default function NtoStarNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-uk" />;
}
