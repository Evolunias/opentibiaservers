import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-private-server');
}

export default function ActiveMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-private-server" />;
}
