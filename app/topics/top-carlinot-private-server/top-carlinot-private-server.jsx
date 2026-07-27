import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-private-server');
}

export default function TopCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-private-server" />;
}
