import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-germany-servers');
}

export default function CanobGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="canob-germany-servers" />;
}
