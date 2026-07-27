import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-europe');
}

export default function ShadowcoresRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-europe" />;
}
