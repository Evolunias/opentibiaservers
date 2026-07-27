import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-poland');
}

export default function ShadowcoresRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-poland" />;
}
