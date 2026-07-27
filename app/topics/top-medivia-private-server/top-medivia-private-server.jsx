import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-private-server');
}

export default function TopMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-private-server" />;
}
