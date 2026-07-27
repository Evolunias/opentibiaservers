import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-north-america');
}

export default function ShadowcoresRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-north-america" />;
}
