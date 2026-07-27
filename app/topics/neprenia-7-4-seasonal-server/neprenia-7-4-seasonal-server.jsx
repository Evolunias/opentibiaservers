import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-seasonal-server');
}

export default function Neprenia74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-seasonal-server" />;
}
