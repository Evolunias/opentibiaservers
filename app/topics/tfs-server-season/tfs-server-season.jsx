import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-season');
}

export default function TfsServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-season" />;
}
