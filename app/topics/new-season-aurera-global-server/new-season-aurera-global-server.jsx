import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-server');
}

export default function NewSeasonAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-server" />;
}
