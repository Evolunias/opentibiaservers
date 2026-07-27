import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-rules');
}

export default function FreshStartRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-rules" />;
}
