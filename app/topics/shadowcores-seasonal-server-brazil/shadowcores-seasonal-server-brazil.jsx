import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-brazil');
}

export default function ShadowcoresSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-brazil" />;
}
