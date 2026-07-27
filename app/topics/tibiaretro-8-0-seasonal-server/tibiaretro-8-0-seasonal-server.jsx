import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-seasonal-server');
}

export default function Tibiaretro80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-seasonal-server" />;
}
