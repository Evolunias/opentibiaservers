import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-tibia');
}

export default function NewSeasonEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-tibia" />;
}
