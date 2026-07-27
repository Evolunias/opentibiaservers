import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-ot-server');
}

export default function CurrentUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-unline-ot-server" />;
}
