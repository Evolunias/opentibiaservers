import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-brazil');
}

export default function TibianusSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-brazil" />;
}
