import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-private-server');
}

export default function TopUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-unline-private-server" />;
}
