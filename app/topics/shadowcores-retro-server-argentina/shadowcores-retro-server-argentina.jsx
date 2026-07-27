import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-argentina');
}

export default function ShadowcoresRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-argentina" />;
}
