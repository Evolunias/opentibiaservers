import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-luminera-server');
}

export default function EvoLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-luminera-server" />;
}
