import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-evo-server');
}

export default function Miracle11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-evo-server" />;
}
