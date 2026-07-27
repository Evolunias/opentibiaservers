import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-seasonal-server');
}

export default function Neprenia81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-seasonal-server" />;
}
