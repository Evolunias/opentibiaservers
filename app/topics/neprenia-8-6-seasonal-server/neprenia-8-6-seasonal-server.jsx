import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-seasonal-server');
}

export default function Neprenia86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-seasonal-server" />;
}
