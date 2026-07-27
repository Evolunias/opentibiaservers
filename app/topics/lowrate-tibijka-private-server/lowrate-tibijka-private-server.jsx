import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-private-server');
}

export default function LowrateTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-private-server" />;
}
