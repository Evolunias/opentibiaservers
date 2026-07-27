import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-tibia');
}

export default function NewSeasonKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-tibia" />;
}
