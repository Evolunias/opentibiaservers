import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-argentina-servers');
}

export default function CanobArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-argentina-servers" />;
}
