import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-chile-servers');
}

export default function CanobChileServersKeywordPage() {
  return <StaticKeywordPage slug="canob-chile-servers" />;
}
