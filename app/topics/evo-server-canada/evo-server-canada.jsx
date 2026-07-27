import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-canada');
}

export default function EvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-canada" />;
}
