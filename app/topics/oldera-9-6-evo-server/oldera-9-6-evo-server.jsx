import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-evo-server');
}

export default function Oldera96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-evo-server" />;
}
