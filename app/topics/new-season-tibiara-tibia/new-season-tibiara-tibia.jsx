import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-tibia');
}

export default function NewSeasonTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-tibia" />;
}
