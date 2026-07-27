import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-high-exp-server-sweden');
}

export default function CanobHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-high-exp-server-sweden" />;
}
