import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-rules');
}

export default function ActiveRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-realera-rules" />;
}
