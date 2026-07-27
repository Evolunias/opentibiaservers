import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-rules');
}

export default function ActiveTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-rules" />;
}
