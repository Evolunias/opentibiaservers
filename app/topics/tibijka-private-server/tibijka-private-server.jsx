import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-private-server');
}

export default function TibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-private-server" />;
}
