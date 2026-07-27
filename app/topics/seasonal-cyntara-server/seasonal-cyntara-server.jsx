import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-cyntara-server');
}

export default function SeasonalCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-cyntara-server" />;
}
