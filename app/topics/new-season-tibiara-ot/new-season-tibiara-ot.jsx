import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-ot');
}

export default function NewSeasonTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-ot" />;
}
