import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-evo-servers');
}

export default function Oldera86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-evo-servers" />;
}
