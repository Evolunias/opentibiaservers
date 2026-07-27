import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-client');
}

export default function NewSeasonTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-client" />;
}
