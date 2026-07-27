import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-thornia-server');
}

export default function SeasonalThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-thornia-server" />;
}
