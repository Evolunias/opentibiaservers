import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-latin-america');
}

export default function NepreniaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-latin-america" />;
}
