import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-official');
}

export default function NewSeasonAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-official" />;
}
