import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-private-server');
}

export default function TopKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-private-server" />;
}
