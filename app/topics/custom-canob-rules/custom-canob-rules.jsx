import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-rules');
}

export default function CustomCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-rules" />;
}
