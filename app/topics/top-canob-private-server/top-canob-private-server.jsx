import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-private-server');
}

export default function TopCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-canob-private-server" />;
}
