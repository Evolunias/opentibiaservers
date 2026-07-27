import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-open-tibia');
}

export default function NewSeasonOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-open-tibia" />;
}
