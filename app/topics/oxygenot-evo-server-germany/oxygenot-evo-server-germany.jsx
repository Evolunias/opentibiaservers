import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-germany');
}

export default function OxygenotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-germany" />;
}
