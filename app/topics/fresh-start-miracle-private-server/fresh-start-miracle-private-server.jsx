import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-private-server');
}

export default function FreshStartMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-private-server" />;
}
