import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-rules');
}

export default function CanobRulesKeywordPage() {
  return <StaticKeywordPage slug="canob-rules" />;
}
