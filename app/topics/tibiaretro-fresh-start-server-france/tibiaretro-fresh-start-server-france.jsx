import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-france');
}

export default function TibiaretroFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-france" />;
}
