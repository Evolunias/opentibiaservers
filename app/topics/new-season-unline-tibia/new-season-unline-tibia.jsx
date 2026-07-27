import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-tibia');
}

export default function NewSeasonUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-tibia" />;
}
