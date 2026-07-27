import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-server');
}

export default function CanobServerKeywordPage() {
  return <StaticKeywordPage slug="canob-server" />;
}
