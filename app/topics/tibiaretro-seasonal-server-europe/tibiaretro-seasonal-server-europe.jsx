import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-europe');
}

export default function TibiaretroSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-europe" />;
}
