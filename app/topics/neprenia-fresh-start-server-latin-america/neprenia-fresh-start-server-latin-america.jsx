import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-latin-america');
}

export default function NepreniaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-latin-america" />;
}
