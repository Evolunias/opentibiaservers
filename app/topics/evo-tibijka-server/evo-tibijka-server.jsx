import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibijka-server');
}

export default function EvoTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibijka-server" />;
}
