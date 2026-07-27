import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-official');
}

export default function NewSeasonOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-official" />;
}
