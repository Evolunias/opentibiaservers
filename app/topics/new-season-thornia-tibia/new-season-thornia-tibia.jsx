import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-tibia');
}

export default function NewSeasonThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-tibia" />;
}
