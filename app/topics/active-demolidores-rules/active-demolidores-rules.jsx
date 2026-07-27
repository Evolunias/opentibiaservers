import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-rules');
}

export default function ActiveDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-rules" />;
}
