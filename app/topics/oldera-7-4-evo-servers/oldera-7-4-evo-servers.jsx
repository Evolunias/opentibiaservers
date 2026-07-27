import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-evo-servers');
}

export default function Oldera74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-evo-servers" />;
}
