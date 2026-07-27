import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-usa');
}

export default function NtoStarNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-usa" />;
}
