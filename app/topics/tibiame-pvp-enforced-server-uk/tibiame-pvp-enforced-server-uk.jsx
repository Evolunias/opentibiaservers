import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-uk');
}

export default function TibiamePvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-uk" />;
}
