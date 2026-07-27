import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-seasonal-server');
}

export default function Tibiaretro12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-seasonal-server" />;
}
