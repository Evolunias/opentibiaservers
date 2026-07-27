import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-ot-server');
}

export default function CurrentCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-canob-ot-server" />;
}
