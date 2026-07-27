import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-poland');
}

export default function ShadowcoresSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-poland" />;
}
