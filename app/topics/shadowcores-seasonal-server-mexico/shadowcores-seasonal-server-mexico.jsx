import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-mexico');
}

export default function ShadowcoresSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-mexico" />;
}
