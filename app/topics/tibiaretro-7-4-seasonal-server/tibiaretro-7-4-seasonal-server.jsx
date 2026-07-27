import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-seasonal-server');
}

export default function Tibiaretro74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-seasonal-server" />;
}
