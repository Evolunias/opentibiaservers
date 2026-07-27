import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-germany');
}

export default function LowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-germany" />;
}
