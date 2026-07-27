import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-server');
}

export default function CustomOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-server" />;
}
