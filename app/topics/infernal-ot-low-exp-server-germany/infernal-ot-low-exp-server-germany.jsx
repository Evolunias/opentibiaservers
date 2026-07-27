import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-germany');
}

export default function InfernalOtLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-germany" />;
}
