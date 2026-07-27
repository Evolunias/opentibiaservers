import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-rules');
}

export default function CurrentZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-rules" />;
}
