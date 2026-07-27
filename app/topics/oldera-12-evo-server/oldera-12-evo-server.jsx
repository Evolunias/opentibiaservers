import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-evo-server');
}

export default function Oldera12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-evo-server" />;
}
