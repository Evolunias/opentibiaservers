import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-brazil');
}

export default function NtoStarNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-brazil" />;
}
