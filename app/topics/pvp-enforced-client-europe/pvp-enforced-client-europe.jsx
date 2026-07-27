import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-europe');
}

export default function PvpEnforcedClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-europe" />;
}
