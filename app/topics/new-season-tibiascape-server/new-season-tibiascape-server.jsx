import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-server');
}

export default function NewSeasonTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-server" />;
}
