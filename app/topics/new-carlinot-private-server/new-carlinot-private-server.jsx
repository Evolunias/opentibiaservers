import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-private-server');
}

export default function NewCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-private-server" />;
}
