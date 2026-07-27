import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-xanteria-server');
}

export default function EvoXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-xanteria-server" />;
}
