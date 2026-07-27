import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-ot-server');
}

export default function EvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-ot-server" />;
}
