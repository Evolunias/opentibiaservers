import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-nostalther-server');
}

export default function SeasonalNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-nostalther-server" />;
}
