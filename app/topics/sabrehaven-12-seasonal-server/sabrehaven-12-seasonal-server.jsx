import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-seasonal-server');
}

export default function Sabrehaven12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-seasonal-server" />;
}
