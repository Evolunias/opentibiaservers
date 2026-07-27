import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-evo-servers');
}

export default function Oldera80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-evo-servers" />;
}
