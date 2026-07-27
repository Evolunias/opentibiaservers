import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-canada');
}

export default function UnlineEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-canada" />;
}
