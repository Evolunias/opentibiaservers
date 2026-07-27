import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-evo-server');
}

export default function Oldera80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-evo-server" />;
}
