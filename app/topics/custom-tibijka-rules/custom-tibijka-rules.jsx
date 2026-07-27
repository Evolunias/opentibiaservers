import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-rules');
}

export default function CustomTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-rules" />;
}
