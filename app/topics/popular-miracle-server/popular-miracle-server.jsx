import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-server');
}

export default function PopularMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-server" />;
}
