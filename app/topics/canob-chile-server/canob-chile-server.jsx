import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-chile-server');
}

export default function CanobChileServerKeywordPage() {
  return <StaticKeywordPage slug="canob-chile-server" />;
}
