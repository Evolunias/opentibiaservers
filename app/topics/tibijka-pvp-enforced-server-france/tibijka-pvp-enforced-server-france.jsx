import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-enforced-server-france');
}

export default function TibijkaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-enforced-server-france" />;
}
