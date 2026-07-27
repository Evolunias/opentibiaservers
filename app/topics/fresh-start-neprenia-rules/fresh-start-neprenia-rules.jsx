import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-rules');
}

export default function FreshStartNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-rules" />;
}
