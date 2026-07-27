import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-private-server');
}

export default function ActiveCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-private-server" />;
}
