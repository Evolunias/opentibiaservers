import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-private-server');
}

export default function TopTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-private-server" />;
}
