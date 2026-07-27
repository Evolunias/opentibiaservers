import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-mexico');
}

export default function ShadowcoresRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-mexico" />;
}
