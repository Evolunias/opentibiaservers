import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-seasonal-server');
}

export default function Neprenia15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-seasonal-server" />;
}
