import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-open-tibia');
}

export default function NewSeasonEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-open-tibia" />;
}
