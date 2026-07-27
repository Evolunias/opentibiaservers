import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-seasonal-server');
}

export default function Tibiaretro71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-seasonal-server" />;
}
