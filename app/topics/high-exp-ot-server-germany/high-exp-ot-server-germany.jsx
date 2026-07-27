import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-germany');
}

export default function HighExpOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-germany" />;
}
