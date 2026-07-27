import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-rules');
}

export default function LowrateDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-rules" />;
}
