import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-rules');
}

export default function NewSeasonEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-rules" />;
}
