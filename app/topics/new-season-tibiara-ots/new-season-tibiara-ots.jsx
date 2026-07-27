import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-ots');
}

export default function NewSeasonTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-ots" />;
}
