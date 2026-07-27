import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-evo-servers');
}

export default function Realera81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-evo-servers" />;
}
