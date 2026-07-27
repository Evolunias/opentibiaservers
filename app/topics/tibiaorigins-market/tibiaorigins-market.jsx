import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-market');
}

export default function TibiaoriginsMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-market" />;
}
