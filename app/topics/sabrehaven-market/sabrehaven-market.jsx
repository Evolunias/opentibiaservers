import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-market');
}

export default function SabrehavenMarketKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-market" />;
}
