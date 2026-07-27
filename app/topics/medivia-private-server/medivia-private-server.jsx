import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-private-server');
}

export default function MediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-private-server" />;
}
