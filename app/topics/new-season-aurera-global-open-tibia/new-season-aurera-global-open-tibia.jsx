import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-open-tibia');
}

export default function NewSeasonAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-open-tibia" />;
}
