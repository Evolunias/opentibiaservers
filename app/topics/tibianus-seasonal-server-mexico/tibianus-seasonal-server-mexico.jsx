import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-mexico');
}

export default function TibianusSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-mexico" />;
}
