import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-sabrehaven-server');
}

export default function WithActivePlayersSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-sabrehaven-server" />;
}
