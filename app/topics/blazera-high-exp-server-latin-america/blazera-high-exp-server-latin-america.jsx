import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-latin-america');
}

export default function BlazeraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-latin-america" />;
}
