import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-seasonal-server');
}

export default function Tibiaretro86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-seasonal-server" />;
}
