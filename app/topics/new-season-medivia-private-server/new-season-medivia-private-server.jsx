import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-private-server');
}

export default function NewSeasonMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-private-server" />;
}
