import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-season');
}

export default function MiracleSeasonKeywordPage() {
  return <StaticKeywordPage slug="miracle-season" />;
}
