import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-europe');
}

export default function ShadowcoresSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-europe" />;
}
