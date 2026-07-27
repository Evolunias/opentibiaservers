import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-rules');
}

export default function OfficialDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-rules" />;
}
