import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-rules');
}

export default function CustomNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-rules" />;
}
