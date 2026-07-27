import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins');
}

export default function NewSeasonTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins" />;
}
