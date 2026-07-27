import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-private-server');
}

export default function NewSeasonTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-private-server" />;
}
