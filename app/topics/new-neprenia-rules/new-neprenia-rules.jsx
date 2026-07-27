import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-rules');
}

export default function NewNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-rules" />;
}
