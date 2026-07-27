import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-ot-server');
}

export default function BestThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-ot-server" />;
}
