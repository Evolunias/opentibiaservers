import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle');
}

export default function PopularMiracleKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle" />;
}
