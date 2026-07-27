import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-open-tibia');
}

export default function NewSeasonAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-open-tibia" />;
}
