import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-private-server');
}

export default function NewSeasonRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-private-server" />;
}
