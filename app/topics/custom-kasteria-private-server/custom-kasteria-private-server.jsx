import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-private-server');
}

export default function CustomKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-private-server" />;
}
