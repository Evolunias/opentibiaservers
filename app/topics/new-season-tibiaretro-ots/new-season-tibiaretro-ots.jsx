import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-ots');
}

export default function NewSeasonTibiaretroOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-ots" />;
}
