import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-seasonal-server');
}

export default function Tibiaretro84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-seasonal-server" />;
}
