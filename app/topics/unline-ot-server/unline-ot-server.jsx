import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-ot-server');
}

export default function UnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="unline-ot-server" />;
}
