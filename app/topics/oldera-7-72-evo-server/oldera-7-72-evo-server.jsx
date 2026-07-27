import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-evo-server');
}

export default function Oldera772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-evo-server" />;
}
