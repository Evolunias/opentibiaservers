import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-open-tibia');
}

export default function NewSeasonTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-open-tibia" />;
}
