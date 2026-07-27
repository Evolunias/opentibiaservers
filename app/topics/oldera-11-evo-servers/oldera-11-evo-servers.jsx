import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-evo-servers');
}

export default function Oldera11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-evo-servers" />;
}
