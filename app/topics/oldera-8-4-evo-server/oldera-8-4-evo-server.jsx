import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-evo-server');
}

export default function Oldera84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-evo-server" />;
}
