import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-seasonal-server');
}

export default function Medivia1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-seasonal-server" />;
}
