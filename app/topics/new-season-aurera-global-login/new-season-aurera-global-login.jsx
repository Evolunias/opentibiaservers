import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-login');
}

export default function NewSeasonAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-login" />;
}
