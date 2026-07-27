import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-ots');
}

export default function NewSeasonAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-ots" />;
}
