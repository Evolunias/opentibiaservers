import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-official');
}

export default function NewSeasonImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-official" />;
}
