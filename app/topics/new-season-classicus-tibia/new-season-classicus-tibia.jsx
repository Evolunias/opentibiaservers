import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-tibia');
}

export default function NewSeasonClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-tibia" />;
}
