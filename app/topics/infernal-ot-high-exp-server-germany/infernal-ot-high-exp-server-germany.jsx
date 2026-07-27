import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-germany');
}

export default function InfernalOtHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-germany" />;
}
