import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-seasonal-server');
}

export default function Sabrehaven86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-seasonal-server" />;
}
