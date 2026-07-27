import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-nilot-server');
}

export default function SeasonalNilotServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-nilot-server" />;
}
