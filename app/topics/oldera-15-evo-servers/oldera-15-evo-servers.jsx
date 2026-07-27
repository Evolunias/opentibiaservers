import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-evo-servers');
}

export default function Oldera15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-evo-servers" />;
}
