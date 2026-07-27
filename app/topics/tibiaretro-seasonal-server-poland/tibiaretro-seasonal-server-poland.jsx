import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-poland');
}

export default function TibiaretroSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-poland" />;
}
