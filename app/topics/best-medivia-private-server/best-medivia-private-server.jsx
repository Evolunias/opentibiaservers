import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-private-server');
}

export default function BestMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-private-server" />;
}
