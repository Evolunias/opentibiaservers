import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-ots');
}

export default function NewSeasonTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-ots" />;
}
