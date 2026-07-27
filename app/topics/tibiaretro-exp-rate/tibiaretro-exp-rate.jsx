import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-exp-rate');
}

export default function TibiaretroExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-exp-rate" />;
}
