import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-private-server');
}

export default function KasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-private-server" />;
}
