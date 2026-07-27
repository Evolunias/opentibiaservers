import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-argentina');
}

export default function ShadowcoresSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-argentina" />;
}
