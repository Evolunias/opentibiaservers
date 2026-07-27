import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-evo-servers');
}

export default function Oldera81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-evo-servers" />;
}
