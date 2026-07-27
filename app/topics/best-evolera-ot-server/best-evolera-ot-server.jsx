import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-ot-server');
}

export default function BestEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-ot-server" />;
}
