import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-rules');
}

export default function NewSeasonTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-rules" />;
}
