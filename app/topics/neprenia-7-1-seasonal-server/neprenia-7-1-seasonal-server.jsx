import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-seasonal-server');
}

export default function Neprenia71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-seasonal-server" />;
}
