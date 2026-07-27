import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-seasonal-server');
}

export default function Sabrehaven11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-seasonal-server" />;
}
