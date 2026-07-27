import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-evo-server');
}

export default function Oldera81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-evo-server" />;
}
