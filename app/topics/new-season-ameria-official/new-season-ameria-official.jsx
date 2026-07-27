import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-official');
}

export default function NewSeasonAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-official" />;
}
