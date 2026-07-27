import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-seasonal-server');
}

export default function Sabrehaven15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-seasonal-server" />;
}
