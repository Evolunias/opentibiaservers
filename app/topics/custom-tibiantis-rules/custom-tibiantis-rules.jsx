import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-rules');
}

export default function CustomTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-rules" />;
}
