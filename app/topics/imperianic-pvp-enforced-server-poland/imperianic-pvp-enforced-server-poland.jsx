import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-poland');
}

export default function ImperianicPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-poland" />;
}
