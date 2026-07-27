import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-rules');
}

export default function CustomAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-rules" />;
}
