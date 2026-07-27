import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-ots');
}

export default function NewSeasonTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-ots" />;
}
