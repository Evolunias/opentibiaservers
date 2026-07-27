import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-argentina');
}

export default function NtoStarPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-argentina" />;
}
