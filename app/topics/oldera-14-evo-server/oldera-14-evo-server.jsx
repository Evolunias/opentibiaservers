import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-evo-server');
}

export default function Oldera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-evo-server" />;
}
