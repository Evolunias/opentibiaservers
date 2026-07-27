import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-germany');
}

export default function BlazeraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-germany" />;
}
