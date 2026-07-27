import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-seasonal-server');
}

export default function Medivia96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-seasonal-server" />;
}
