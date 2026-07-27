import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-evo-server');
}

export default function Oldera86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-evo-server" />;
}
