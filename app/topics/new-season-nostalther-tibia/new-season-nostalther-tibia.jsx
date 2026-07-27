import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-tibia');
}

export default function NewSeasonNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-tibia" />;
}
