import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-open-tibia');
}

export default function NewSeasonUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-open-tibia" />;
}
