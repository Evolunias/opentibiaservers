import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-brazil');
}

export default function NtoStarNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-brazil" />;
}
