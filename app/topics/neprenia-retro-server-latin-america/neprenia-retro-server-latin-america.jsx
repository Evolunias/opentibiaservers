import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-latin-america');
}

export default function NepreniaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-latin-america" />;
}
