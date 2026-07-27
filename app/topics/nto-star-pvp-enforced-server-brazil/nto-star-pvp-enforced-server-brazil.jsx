import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-brazil');
}

export default function NtoStarPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-brazil" />;
}
