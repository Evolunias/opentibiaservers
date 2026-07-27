import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-seasonal-server');
}

export default function Sabrehaven76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-seasonal-server" />;
}
