import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-canada');
}

export default function BlazeraHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-canada" />;
}
