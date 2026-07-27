import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-ot');
}

export default function NewSeasonTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-ot" />;
}
