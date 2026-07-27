import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-server');
}

export default function BestCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-server" />;
}
