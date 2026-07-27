import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-private-server');
}

export default function NewSeasonTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-private-server" />;
}
