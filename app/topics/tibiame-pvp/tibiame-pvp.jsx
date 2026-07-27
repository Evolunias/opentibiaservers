import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvp');
}

export default function TibiamePvpKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvp" />;
}
