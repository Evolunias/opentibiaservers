import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-realera-server');
}

export default function EvoRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-realera-server" />;
}
