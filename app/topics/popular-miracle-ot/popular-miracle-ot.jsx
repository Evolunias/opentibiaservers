import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-ot');
}

export default function PopularMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-ot" />;
}
