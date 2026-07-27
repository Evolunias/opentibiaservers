import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-germany');
}

export default function RealestaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-germany" />;
}
