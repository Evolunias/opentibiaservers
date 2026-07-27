import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-poland-server');
}

export default function CanobPolandServerKeywordPage() {
  return <StaticKeywordPage slug="canob-poland-server" />;
}
