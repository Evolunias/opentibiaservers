import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-login');
}

export default function NewSeasonTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-login" />;
}
