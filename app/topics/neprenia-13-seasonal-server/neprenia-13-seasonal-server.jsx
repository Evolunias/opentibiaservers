import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-seasonal-server');
}

export default function Neprenia13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-seasonal-server" />;
}
