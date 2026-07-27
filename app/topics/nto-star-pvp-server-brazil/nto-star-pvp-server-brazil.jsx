import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-brazil');
}

export default function NtoStarPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-brazil" />;
}
