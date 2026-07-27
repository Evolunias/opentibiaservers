import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-server');
}

export default function TopMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-server" />;
}
