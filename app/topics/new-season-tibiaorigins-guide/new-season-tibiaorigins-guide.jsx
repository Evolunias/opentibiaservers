import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-guide');
}

export default function NewSeasonTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-guide" />;
}
