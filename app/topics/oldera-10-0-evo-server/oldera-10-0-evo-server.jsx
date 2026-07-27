import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-evo-server');
}

export default function Oldera100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-evo-server" />;
}
