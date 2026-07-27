import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-brazil');
}

export default function TibiamePvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-brazil" />;
}
