import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-market');
}

export default function SerenityMarketKeywordPage() {
  return <StaticKeywordPage slug="serenity-market" />;
}
