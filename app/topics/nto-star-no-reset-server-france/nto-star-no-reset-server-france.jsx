import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-france');
}

export default function NtoStarNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-france" />;
}
