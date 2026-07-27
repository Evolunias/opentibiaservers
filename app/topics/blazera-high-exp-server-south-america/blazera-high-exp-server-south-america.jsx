import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-south-america');
}

export default function BlazeraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-south-america" />;
}
