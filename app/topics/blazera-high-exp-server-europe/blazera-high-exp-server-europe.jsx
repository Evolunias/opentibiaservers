import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-europe');
}

export default function BlazeraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-europe" />;
}
