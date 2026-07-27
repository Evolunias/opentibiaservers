import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-season');
}

export default function EvoServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="evo-server-season" />;
}
