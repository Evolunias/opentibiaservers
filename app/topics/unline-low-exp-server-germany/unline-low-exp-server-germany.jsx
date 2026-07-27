import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-germany');
}

export default function UnlineLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-germany" />;
}
