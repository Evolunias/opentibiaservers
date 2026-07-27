import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-rules');
}

export default function NewSeasonLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-rules" />;
}
