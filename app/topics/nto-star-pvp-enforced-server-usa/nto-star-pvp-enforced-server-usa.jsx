import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-usa');
}

export default function NtoStarPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-usa" />;
}
