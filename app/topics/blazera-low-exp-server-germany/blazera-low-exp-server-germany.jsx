import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-germany');
}

export default function BlazeraLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-germany" />;
}
