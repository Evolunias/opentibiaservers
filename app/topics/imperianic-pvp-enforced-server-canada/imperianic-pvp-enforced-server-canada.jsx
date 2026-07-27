import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-canada');
}

export default function ImperianicPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-canada" />;
}
