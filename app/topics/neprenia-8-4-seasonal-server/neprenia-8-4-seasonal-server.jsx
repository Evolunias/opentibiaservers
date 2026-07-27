import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-seasonal-server');
}

export default function Neprenia84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-seasonal-server" />;
}
