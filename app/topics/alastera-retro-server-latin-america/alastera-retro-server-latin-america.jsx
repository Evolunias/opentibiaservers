import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-latin-america');
}

export default function AlasteraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-latin-america" />;
}
