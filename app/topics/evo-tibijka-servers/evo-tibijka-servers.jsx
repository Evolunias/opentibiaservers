import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibijka-servers');
}

export default function EvoTibijkaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibijka-servers" />;
}
