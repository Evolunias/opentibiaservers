import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-argentina-server');
}

export default function CanobArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="canob-argentina-server" />;
}
