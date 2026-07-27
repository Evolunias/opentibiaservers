import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-open-tibia');
}

export default function NewSeasonNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-open-tibia" />;
}
