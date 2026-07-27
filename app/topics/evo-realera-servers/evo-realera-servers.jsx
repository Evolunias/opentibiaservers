import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-realera-servers');
}

export default function EvoRealeraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-realera-servers" />;
}
