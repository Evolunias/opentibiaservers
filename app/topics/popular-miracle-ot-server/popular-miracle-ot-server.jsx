import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-ot-server');
}

export default function PopularMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-ot-server" />;
}
