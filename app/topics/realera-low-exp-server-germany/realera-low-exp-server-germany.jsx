import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-germany');
}

export default function RealeraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-germany" />;
}
