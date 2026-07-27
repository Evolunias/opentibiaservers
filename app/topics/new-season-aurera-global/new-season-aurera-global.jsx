import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global');
}

export default function NewSeasonAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global" />;
}
