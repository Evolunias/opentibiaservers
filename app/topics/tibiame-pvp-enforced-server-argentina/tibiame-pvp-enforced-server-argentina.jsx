import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-argentina');
}

export default function TibiamePvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-argentina" />;
}
