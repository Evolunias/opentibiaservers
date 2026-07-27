import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-private-server');
}

export default function BestCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-private-server" />;
}
