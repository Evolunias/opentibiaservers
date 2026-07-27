import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-seasonal-server');
}

export default function Tibiaretro14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-seasonal-server" />;
}
