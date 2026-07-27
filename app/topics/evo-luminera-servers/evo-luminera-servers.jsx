import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-luminera-servers');
}

export default function EvoLumineraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-luminera-servers" />;
}
