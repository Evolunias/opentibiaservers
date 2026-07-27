import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-north-america');
}

export default function BlazeraHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-north-america" />;
}
