import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-usa-server');
}

export default function MiracleUsaServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-usa-server" />;
}
