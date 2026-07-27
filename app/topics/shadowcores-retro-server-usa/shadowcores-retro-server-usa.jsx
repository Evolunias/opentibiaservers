import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-usa');
}

export default function ShadowcoresRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-usa" />;
}
