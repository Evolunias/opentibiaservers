import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-tibia');
}

export default function NewSeasonMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-tibia" />;
}
