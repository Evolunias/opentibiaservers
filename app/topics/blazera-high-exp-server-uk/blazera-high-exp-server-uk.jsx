import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-uk');
}

export default function BlazeraHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-uk" />;
}
