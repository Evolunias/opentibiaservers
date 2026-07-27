import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-rules');
}

export default function NepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="neprenia-rules" />;
}
