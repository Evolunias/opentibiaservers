import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-seasonal-server');
}

export default function Tibiaretro772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-seasonal-server" />;
}
