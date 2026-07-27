import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-evo-server');
}

export default function Oldera1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-evo-server" />;
}
