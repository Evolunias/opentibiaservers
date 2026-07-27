import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-enforced-server-latin-america');
}

export default function TibiamePvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-enforced-server-latin-america" />;
}
