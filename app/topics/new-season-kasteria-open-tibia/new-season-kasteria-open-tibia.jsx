import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-open-tibia');
}

export default function NewSeasonKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-open-tibia" />;
}
