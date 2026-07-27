import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-germany');
}

export default function EvoOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-germany" />;
}
