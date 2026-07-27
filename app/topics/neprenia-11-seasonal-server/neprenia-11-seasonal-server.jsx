import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-seasonal-server');
}

export default function Neprenia11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-seasonal-server" />;
}
