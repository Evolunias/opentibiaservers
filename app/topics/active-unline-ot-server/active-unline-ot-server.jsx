import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-ot-server');
}

export default function ActiveUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-unline-ot-server" />;
}
