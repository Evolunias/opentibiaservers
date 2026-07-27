import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-private-server');
}

export default function FreshStartMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-private-server" />;
}
