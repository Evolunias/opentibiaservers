import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-evo-server');
}

export default function Oldera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-evo-server" />;
}
