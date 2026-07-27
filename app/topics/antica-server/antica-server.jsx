import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-server');
}

export default function AnticaServerKeywordPage() {
  return <StaticKeywordPage slug="antica-server" />;
}
