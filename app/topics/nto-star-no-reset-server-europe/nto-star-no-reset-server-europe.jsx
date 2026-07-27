import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-europe');
}

export default function NtoStarNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-europe" />;
}
