import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-evo-servers');
}

export default function Realera13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-13-evo-servers" />;
}
