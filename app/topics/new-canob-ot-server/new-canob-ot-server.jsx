import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-ot-server');
}

export default function NewCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-canob-ot-server" />;
}
