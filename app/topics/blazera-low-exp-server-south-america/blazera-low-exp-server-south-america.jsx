import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-south-america');
}

export default function BlazeraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-south-america" />;
}
