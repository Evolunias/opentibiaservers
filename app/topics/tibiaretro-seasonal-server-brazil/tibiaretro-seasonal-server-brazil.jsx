import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-brazil');
}

export default function TibiaretroSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-brazil" />;
}
