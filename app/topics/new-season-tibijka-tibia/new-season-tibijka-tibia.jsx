import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-tibia');
}

export default function NewSeasonTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-tibia" />;
}
