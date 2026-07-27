import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-seasonal-server');
}

export default function Medivia11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-seasonal-server" />;
}
