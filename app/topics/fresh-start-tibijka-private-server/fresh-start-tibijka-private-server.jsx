import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-private-server');
}

export default function FreshStartTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-private-server" />;
}
