import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-seasonal-server');
}

export default function Medivia12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-seasonal-server" />;
}
