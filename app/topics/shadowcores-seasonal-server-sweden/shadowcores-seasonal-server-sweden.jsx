import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-sweden');
}

export default function ShadowcoresSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-sweden" />;
}
