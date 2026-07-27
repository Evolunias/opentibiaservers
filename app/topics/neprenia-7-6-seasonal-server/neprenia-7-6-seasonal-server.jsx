import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-seasonal-server');
}

export default function Neprenia76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-seasonal-server" />;
}
