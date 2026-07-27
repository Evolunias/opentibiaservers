import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-season');
}

export default function TibiameSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiame-season" />;
}
