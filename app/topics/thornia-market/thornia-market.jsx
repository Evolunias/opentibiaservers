import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-market');
}

export default function ThorniaMarketKeywordPage() {
  return <StaticKeywordPage slug="thornia-market" />;
}
