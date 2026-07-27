import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-server');
}

export default function NewSeasonTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-server" />;
}
