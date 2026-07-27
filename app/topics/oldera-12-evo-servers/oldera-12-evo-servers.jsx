import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-evo-servers');
}

export default function Oldera12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-evo-servers" />;
}
