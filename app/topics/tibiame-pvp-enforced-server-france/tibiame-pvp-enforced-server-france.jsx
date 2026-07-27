import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-france');
}

export default function TibiamePvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-france" />;
}
