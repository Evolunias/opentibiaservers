import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-argentina');
}

export default function NtoStarNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-argentina" />;
}
