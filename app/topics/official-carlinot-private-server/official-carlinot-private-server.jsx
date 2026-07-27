import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-private-server');
}

export default function OfficialCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-private-server" />;
}
