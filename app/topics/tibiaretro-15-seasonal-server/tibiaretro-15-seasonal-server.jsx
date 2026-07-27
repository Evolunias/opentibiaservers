import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-seasonal-server');
}

export default function Tibiaretro15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-seasonal-server" />;
}
