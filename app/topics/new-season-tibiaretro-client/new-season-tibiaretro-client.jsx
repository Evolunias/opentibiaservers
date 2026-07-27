import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-client');
}

export default function NewSeasonTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-client" />;
}
