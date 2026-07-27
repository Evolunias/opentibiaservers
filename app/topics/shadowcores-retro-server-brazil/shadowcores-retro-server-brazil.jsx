import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-retro-server-brazil');
}

export default function ShadowcoresRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-retro-server-brazil" />;
}
