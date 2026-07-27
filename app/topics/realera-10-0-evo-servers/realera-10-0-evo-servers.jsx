import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-evo-servers');
}

export default function Realera100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-evo-servers" />;
}
