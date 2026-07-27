import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-market');
}

export default function MediviaMarketKeywordPage() {
  return <StaticKeywordPage slug="medivia-market" />;
}
