import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-germany');
}

export default function ImperianicPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-germany" />;
}
