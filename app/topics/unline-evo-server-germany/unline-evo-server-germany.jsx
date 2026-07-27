import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-germany');
}

export default function UnlineEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-germany" />;
}
