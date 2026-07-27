import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-server');
}

export default function LowrateTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-server" />;
}
