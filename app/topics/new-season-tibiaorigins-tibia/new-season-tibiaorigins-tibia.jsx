import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-tibia');
}

export default function NewSeasonTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-tibia" />;
}
