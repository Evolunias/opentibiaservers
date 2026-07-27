import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-rules');
}

export default function NewSeasonMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-rules" />;
}
