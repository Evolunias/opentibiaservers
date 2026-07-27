import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-shadowcores-server');
}

export default function SeasonalShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-shadowcores-server" />;
}
