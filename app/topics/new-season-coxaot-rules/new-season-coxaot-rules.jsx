import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-rules');
}

export default function NewSeasonCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-rules" />;
}
