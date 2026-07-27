import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-seasonal-server');
}

export default function Medivia100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-seasonal-server" />;
}
