import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-germany');
}

export default function NoxiousotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-germany" />;
}
