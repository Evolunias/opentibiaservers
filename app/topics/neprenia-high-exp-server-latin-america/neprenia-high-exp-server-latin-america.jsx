import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-latin-america');
}

export default function NepreniaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-latin-america" />;
}
