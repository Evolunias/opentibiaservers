import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-private-server');
}

export default function NewTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-private-server" />;
}
