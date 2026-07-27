import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-ots');
}

export default function NewSeasonTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-ots" />;
}
