import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-private-server');
}

export default function NewSeasonYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-private-server" />;
}
