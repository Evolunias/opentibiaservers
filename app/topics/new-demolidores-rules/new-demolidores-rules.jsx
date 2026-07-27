import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-rules');
}

export default function NewDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-rules" />;
}
