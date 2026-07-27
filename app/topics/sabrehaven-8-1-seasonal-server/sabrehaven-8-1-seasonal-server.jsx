import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-seasonal-server');
}

export default function Sabrehaven81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-seasonal-server" />;
}
