import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-seasonal-server');
}

export default function Medivia86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-seasonal-server" />;
}
