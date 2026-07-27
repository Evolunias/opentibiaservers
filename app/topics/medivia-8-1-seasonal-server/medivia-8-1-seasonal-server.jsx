import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-seasonal-server');
}

export default function Medivia81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-seasonal-server" />;
}
