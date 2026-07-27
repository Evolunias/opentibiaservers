import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-ot-server');
}

export default function BestUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-unline-ot-server" />;
}
