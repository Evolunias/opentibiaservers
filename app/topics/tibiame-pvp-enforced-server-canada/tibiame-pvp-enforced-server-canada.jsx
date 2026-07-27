import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-canada');
}

export default function TibiamePvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-canada" />;
}
