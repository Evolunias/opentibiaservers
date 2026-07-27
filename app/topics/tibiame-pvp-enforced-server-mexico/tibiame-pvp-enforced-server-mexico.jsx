import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-mexico');
}

export default function TibiamePvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-mexico" />;
}
