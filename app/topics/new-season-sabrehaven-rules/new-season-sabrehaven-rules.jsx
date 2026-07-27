import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-rules');
}

export default function NewSeasonSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-rules" />;
}
