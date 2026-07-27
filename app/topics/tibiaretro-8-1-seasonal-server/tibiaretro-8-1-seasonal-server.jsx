import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-seasonal-server');
}

export default function Tibiaretro81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-seasonal-server" />;
}
