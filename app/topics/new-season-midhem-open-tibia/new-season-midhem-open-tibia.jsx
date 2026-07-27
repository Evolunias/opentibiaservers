import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-open-tibia');
}

export default function NewSeasonMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-open-tibia" />;
}
