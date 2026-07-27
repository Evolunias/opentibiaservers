import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-europe');
}

export default function ImperianicPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-europe" />;
}
