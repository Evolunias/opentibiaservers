import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-europe');
}

export default function PvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-europe" />;
}
