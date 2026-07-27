import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-seasonal-server');
}

export default function Tibiaretro100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-seasonal-server" />;
}
