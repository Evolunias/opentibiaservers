import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape');
}

export default function NewSeasonTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape" />;
}
