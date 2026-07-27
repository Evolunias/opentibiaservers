import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-login');
}

export default function LowrateYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-login" />;
}
