import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-server');
}

export default function CurrentTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-server" />;
}
