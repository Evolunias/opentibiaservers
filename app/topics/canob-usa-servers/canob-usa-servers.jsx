import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-usa-servers');
}

export default function CanobUsaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-usa-servers" />;
}
