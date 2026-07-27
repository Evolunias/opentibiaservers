import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-login');
}

export default function LowrateOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-login" />;
}
