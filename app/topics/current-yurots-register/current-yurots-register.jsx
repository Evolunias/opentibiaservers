import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-register');
}

export default function CurrentYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-register" />;
}
