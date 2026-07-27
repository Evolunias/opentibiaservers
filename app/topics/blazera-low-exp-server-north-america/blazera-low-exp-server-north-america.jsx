import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-north-america');
}

export default function BlazeraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-north-america" />;
}
