import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-private-server');
}

export default function NewMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-private-server" />;
}
