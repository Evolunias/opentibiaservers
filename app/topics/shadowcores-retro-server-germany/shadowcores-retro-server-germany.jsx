import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-germany');
}

export default function ShadowcoresRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-germany" />;
}
