import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-seasonal-server');
}

export default function Tibiaretro11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-seasonal-server" />;
}
