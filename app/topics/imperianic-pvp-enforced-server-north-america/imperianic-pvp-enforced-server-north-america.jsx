import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-north-america');
}

export default function ImperianicPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-north-america" />;
}
