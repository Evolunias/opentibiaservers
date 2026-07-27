import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-poland');
}

export default function BlazeraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-poland" />;
}
