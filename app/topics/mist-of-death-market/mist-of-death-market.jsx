import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-market');
}

export default function MistOfDeathMarketKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-market" />;
}
