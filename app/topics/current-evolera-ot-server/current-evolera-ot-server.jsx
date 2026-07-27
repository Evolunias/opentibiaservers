import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-ot-server');
}

export default function CurrentEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-ot-server" />;
}
