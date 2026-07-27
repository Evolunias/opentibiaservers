import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-uk');
}

export default function ShadowcoresRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-uk" />;
}
