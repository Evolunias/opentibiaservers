import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-client');
}

export default function PopularMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-client" />;
}
