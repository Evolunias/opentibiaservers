import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-rules');
}

export default function ActiveNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-rules" />;
}
