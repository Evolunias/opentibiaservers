import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-evo-server');
}

export default function Oldera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-evo-server" />;
}
