import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-north-america-servers');
}

export default function CanobNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="canob-north-america-servers" />;
}
