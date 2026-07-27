import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-private-server');
}

export default function LowrateAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-private-server" />;
}
