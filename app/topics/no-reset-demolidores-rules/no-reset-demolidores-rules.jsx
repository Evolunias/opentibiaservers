import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-rules');
}

export default function NoResetDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-rules" />;
}
