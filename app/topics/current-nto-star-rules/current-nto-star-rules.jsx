import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-rules');
}

export default function CurrentNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-rules" />;
}
