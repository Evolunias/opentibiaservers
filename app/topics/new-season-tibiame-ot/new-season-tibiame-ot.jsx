import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-ot');
}

export default function NewSeasonTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-ot" />;
}
