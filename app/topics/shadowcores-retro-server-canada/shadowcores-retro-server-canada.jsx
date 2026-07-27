import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-canada');
}

export default function ShadowcoresRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-canada" />;
}
