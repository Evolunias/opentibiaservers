import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-germany');
}

export default function LowExpOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-germany" />;
}
