import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-tibia');
}

export default function NewSeasonEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-tibia" />;
}
