import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-evo-servers');
}

export default function Oldera71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-evo-servers" />;
}
