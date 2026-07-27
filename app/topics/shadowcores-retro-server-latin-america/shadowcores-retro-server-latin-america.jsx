import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-latin-america');
}

export default function ShadowcoresRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-latin-america" />;
}
