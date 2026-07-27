import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-ot-server');
}

export default function NewSeasonTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-ot-server" />;
}
