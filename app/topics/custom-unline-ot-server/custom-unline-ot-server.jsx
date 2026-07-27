import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-ot-server');
}

export default function CustomUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-ot-server" />;
}
