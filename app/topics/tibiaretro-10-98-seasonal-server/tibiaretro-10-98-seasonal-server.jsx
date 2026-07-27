import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-seasonal-server');
}

export default function Tibiaretro1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-seasonal-server" />;
}
