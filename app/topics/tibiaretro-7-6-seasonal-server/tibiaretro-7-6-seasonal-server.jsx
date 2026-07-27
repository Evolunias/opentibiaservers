import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-seasonal-server');
}

export default function Tibiaretro76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-seasonal-server" />;
}
