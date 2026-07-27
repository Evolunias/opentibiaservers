import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-france');
}

export default function ImperianicPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-france" />;
}
