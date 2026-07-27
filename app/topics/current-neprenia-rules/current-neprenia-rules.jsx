import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-rules');
}

export default function CurrentNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-rules" />;
}
