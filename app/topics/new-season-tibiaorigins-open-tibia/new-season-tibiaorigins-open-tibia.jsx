import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-open-tibia');
}

export default function NewSeasonTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-open-tibia" />;
}
