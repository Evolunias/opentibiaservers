import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-rules');
}

export default function CustomEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-rules" />;
}
