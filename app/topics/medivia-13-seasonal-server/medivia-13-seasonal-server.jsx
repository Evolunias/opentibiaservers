import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-seasonal-server');
}

export default function Medivia13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-seasonal-server" />;
}
