import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibiaretro-server');
}

export default function SeasonalTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibiaretro-server" />;
}
