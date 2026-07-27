import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-private-server');
}

export default function CustomMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-private-server" />;
}
