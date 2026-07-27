import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-seasonal-server');
}

export default function Sabrehaven71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-seasonal-server" />;
}
