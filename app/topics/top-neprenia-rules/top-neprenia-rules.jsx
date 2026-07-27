import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-rules');
}

export default function TopNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-rules" />;
}
