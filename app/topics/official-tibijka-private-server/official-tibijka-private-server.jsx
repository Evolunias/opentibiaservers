import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-private-server');
}

export default function OfficialTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-private-server" />;
}
