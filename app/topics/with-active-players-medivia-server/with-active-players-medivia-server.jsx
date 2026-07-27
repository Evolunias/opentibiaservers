import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-medivia-server');
}

export default function WithActivePlayersMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-medivia-server" />;
}
