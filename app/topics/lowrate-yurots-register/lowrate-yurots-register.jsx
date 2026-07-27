import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-register');
}

export default function LowrateYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-register" />;
}
