import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-ot-server');
}

export default function BestCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-ot-server" />;
}
