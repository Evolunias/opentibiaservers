import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-ot-server');
}

export default function PopularCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-ot-server" />;
}
