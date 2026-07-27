import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-canada');
}

export default function BlazeraLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-canada" />;
}
