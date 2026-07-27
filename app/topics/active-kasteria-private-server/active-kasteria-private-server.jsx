import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-private-server');
}

export default function ActiveKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-private-server" />;
}
