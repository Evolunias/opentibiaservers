import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-server');
}

export default function NewSeasonTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-server" />;
}
