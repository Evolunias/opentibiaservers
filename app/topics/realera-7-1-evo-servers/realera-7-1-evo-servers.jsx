import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-evo-servers');
}

export default function Realera71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-evo-servers" />;
}
