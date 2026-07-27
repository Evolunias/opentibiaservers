import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-private-server');
}

export default function NewSeasonOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-private-server" />;
}
