import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-official');
}

export default function NewSeasonTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-official" />;
}
