import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-germany');
}

export default function RealestaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-germany" />;
}
