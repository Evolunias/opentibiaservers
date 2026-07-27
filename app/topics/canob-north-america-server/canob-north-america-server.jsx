import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-north-america-server');
}

export default function CanobNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="canob-north-america-server" />;
}
