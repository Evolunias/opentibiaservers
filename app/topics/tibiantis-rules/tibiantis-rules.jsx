import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-rules');
}

export default function TibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-rules" />;
}
