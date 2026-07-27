import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-poland-servers');
}

export default function CanobPolandServersKeywordPage() {
  return <StaticKeywordPage slug="canob-poland-servers" />;
}
