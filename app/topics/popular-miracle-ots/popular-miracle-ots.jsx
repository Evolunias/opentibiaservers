import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-ots');
}

export default function PopularMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-ots" />;
}
