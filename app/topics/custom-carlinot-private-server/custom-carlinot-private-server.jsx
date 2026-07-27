import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-private-server');
}

export default function CustomCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-private-server" />;
}
