import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-login');
}

export default function CurrentOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-login" />;
}
