import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-seasonal-server');
}

export default function Neprenia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-seasonal-server" />;
}
