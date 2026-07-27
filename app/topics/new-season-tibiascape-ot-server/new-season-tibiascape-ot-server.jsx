import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-ot-server');
}

export default function NewSeasonTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-ot-server" />;
}
