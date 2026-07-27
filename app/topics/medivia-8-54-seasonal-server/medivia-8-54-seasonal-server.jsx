import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-seasonal-server');
}

export default function Medivia854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-seasonal-server" />;
}
