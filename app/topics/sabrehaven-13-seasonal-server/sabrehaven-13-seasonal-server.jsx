import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-seasonal-server');
}

export default function Sabrehaven13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-seasonal-server" />;
}
