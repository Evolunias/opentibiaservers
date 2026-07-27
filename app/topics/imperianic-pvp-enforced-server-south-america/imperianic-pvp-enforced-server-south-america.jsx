import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-enforced-server-south-america');
}

export default function ImperianicPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-enforced-server-south-america" />;
}
