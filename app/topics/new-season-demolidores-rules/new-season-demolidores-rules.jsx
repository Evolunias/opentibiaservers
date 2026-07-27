import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-rules');
}

export default function NewSeasonDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-rules" />;
}
