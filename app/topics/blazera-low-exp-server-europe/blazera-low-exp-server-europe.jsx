import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-europe');
}

export default function BlazeraLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-europe" />;
}
