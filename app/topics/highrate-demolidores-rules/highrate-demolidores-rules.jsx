import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-rules');
}

export default function HighrateDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-rules" />;
}
