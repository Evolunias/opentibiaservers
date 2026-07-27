import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-rules');
}

export default function ActiveTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-rules" />;
}
