import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-poland');
}

export default function BlazeraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-poland" />;
}
