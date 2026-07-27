import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-website');
}

export default function NewSeasonTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-website" />;
}
