import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-xanteria-servers');
}

export default function EvoXanteriaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-xanteria-servers" />;
}
