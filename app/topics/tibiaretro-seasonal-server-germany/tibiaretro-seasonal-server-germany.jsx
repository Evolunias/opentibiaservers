import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-germany');
}

export default function TibiaretroSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-germany" />;
}
