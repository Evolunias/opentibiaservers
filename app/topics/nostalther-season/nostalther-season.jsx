import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-season');
}

export default function NostaltherSeasonKeywordPage() {
  return <StaticKeywordPage slug="nostalther-season" />;
}
