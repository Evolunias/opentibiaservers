import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-evo-servers');
}

export default function Realera76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-evo-servers" />;
}
