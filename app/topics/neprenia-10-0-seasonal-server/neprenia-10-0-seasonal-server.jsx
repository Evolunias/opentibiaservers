import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-seasonal-server');
}

export default function Neprenia100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-seasonal-server" />;
}
