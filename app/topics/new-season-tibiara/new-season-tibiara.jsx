import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara');
}

export default function NewSeasonTibiaraKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara" />;
}
