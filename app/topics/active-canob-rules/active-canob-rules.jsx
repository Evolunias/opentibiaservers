import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-rules');
}

export default function ActiveCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="active-canob-rules" />;
}
