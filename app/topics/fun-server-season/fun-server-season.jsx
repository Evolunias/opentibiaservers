import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-season');
}

export default function FunServerSeasonKeywordPage() {
  return <StaticKeywordPage slug="fun-server-season" />;
}
