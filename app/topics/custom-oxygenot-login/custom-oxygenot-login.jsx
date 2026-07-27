import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-login');
}

export default function CustomOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-login" />;
}
