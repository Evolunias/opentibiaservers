import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-evo-server');
}

export default function Oldera15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-evo-server" />;
}
