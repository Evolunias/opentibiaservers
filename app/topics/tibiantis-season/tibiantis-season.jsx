import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-season');
}

export default function TibiantisSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-season" />;
}
