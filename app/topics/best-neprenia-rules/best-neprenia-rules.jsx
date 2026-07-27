import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-rules');
}

export default function BestNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-rules" />;
}
