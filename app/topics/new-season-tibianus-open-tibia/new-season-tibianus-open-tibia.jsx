import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-open-tibia');
}

export default function NewSeasonTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-open-tibia" />;
}
