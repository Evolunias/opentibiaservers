import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-private-server');
}

export default function PopularMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-private-server" />;
}
