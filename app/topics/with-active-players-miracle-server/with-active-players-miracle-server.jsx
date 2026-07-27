import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-miracle-server');
}

export default function WithActivePlayersMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-miracle-server" />;
}
