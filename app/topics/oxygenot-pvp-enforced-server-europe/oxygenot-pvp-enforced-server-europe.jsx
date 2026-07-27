import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-europe');
}

export default function OxygenotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-europe" />;
}
