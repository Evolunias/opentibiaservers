import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-ot');
}

export default function NewSeasonTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-ot" />;
}
