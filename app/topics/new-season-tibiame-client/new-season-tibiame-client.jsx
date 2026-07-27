import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-client');
}

export default function NewSeasonTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-client" />;
}
