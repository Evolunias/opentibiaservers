import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-usa-server');
}

export default function CanobUsaServerKeywordPage() {
  return <StaticKeywordPage slug="canob-usa-server" />;
}
