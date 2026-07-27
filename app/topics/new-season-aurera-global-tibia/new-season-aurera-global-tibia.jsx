import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-tibia');
}

export default function NewSeasonAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-tibia" />;
}
