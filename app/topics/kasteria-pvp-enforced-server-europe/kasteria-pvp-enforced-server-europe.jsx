import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-europe');
}

export default function KasteriaPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-europe" />;
}
