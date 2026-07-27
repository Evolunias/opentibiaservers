import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-season');
}

export default function RealestaSeasonKeywordPage() {
  return <StaticKeywordPage slug="realesta-season" />;
}
