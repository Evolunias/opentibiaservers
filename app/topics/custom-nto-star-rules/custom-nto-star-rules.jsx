import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-rules');
}

export default function CustomNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-rules" />;
}
