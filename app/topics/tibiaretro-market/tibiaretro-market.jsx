import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-market');
}

export default function TibiaretroMarketKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-market" />;
}
