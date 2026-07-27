import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-ot-server');
}

export default function NewSeasonTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-ot-server" />;
}
