import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-client');
}

export default function NewSeasonAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-client" />;
}
