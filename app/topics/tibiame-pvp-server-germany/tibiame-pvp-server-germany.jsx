import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp-server-germany');
}

export default function TibiamePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp-server-germany" />;
}
