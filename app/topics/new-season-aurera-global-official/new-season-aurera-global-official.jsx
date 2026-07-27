import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-official');
}

export default function NewSeasonAureraGlobalOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-official" />;
}
