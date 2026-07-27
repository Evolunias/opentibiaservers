import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-germany');
}

export default function UnlineHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-germany" />;
}
