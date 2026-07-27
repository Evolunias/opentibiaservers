import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-enforced-server-europe');
}

export default function NtoStarPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-enforced-server-europe" />;
}
