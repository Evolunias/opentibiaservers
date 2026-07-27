import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-ot-server');
}

export default function TopUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-unline-ot-server" />;
}
