import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-germany');
}

export default function RealestaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-germany" />;
}
