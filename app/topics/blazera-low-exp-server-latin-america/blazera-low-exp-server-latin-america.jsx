import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-latin-america');
}

export default function BlazeraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-latin-america" />;
}
