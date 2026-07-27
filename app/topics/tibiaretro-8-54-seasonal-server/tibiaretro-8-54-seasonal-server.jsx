import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-seasonal-server');
}

export default function Tibiaretro854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-seasonal-server" />;
}
