import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-private-server');
}

export default function OfficialKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-private-server" />;
}
