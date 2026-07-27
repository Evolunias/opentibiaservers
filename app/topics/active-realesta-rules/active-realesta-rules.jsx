import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-rules');
}

export default function ActiveRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-rules" />;
}
