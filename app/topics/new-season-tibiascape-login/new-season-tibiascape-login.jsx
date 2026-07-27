import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-login');
}

export default function NewSeasonTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-login" />;
}
