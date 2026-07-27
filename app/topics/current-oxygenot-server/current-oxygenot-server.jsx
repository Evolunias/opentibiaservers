import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-server');
}

export default function CurrentOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-server" />;
}
