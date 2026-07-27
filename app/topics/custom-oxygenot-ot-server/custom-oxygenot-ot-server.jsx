import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-ot-server');
}

export default function CustomOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-ot-server" />;
}
