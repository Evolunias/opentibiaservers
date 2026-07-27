import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-poland');
}

export default function NtoStarPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-poland" />;
}
