import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-rules');
}

export default function NewSeasonOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-rules" />;
}
