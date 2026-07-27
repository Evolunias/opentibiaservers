import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-germany');
}

export default function TibiamePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-germany" />;
}
