import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-usa');
}

export default function ShadowcoresSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-usa" />;
}
