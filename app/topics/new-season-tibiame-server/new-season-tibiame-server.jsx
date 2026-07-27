import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-server');
}

export default function NewSeasonTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-server" />;
}
