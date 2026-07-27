import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-private-server');
}

export default function BestKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-private-server" />;
}
