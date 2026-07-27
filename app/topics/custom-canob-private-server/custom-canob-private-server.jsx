import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-private-server');
}

export default function CustomCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-private-server" />;
}
