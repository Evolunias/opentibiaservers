import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-private-server');
}

export default function CanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="canob-private-server" />;
}
