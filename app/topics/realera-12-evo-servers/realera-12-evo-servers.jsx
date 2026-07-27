import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-evo-servers');
}

export default function Realera12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="realera-12-evo-servers" />;
}
