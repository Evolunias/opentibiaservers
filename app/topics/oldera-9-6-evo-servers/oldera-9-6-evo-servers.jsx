import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-evo-servers');
}

export default function Oldera96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-evo-servers" />;
}
