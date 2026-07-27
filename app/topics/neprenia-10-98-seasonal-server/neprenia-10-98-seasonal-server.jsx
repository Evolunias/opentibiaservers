import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-seasonal-server');
}

export default function Neprenia1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-seasonal-server" />;
}
