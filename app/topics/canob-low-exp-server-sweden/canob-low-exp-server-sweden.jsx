import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-low-exp-server-sweden');
}

export default function CanobLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-low-exp-server-sweden" />;
}
