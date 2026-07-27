import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-evo-server');
}

export default function Oldera74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-evo-server" />;
}
