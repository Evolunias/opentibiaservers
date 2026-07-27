import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-north-america');
}

export default function NtoStarNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-north-america" />;
}
